import * as React from 'react'
import * as ReactDOM from 'react-dom'

import socketIOClient from "socket.io-client";

import * as Material from "@material-ui/core"
import * as Icons from "@material-ui/icons"

import sir5logo from "./resources/5sirlogo.jpg"

var shajs = require("sha.js")
const VERSION_NUMBER = "fantasy-footgun-admin 0.1.12a"
console.log(VERSION_NUMBER)
const formStore = require("./formModel.js")
formStore.fields = formStore.fields.slice(1)
var serverURL = "https://sheltered-atoll-88652.herokuapp.com/"
const sha256hash = content => shajs('sha256').update(content).digest('base64')

var setTabs
var additionalTabs = []
const RESERVED_TABS = 1
var tabID = RESERVED_TABS

var socket
var adminAuthToken
var adminSalt
var waitSalt = false
var secretToken
const clientSalt = "mkAmN1iwuMpqfckRXDRwwmgSI+nfZTF3kKR0bs2MZnM="

const ScrollWrapper = ({childContext, mykey, children}) => {
  const currKey = React.useRef(mykey)
  if (currKey.current !== mykey && currKey.current !== null) {
    childContext.current[currKey.current] = window.scrollY
    currKey.current = null
  }
  React.useLayoutEffect(() => {
    currKey.current = mykey
    if (childContext.current[mykey] === undefined) {
      childContext.current[mykey] = 0
    }
    window.scrollTo(window.scrollX, childContext.current[mykey])
  }, [mykey, currKey])
  return children
}

const App = () => {
  
  var [authenticated, setAuthenticated] = React.useState(false)
  var [tabs, mySetTabs] = React.useState([])
  setTabs = mySetTabs
  React.useEffect(() => {
    socket = socketIOClient(serverURL, {secure: true});
    socket.on("sendAdminSalt", (salt) => {
      adminSalt = salt
      if (waitSalt) {
        waitSalt = false
        constructVerifyToken()
      }
    })
    const onAuthFailed = () => {
      const password = prompt("Please enter the administrator password")
      secretToken = sha256hash(`${clientSalt}::${password}`)
      if (adminSalt === undefined) {
        waitSalt = true
        return
      }
      constructVerifyToken()
    }
    const constructVerifyToken = () => {
      adminAuthToken = sha256hash(`${adminSalt}::${secretToken}`)
      socket.emit("requestAdminAuth", adminAuthToken)
    }
    socket.on("sendAuthSuccessful", () => setAuthenticated(true))
    socket.on("sendAuthFailed", onAuthFailed)
    socket.emit("requestAdminSalt", "")
    onAuthFailed()
    return () => {
      socket.disconnect()
    }
  }, [])
  const [selTab, setSelTab] = React.useState(0)
  const appbarRef = React.useRef(null)
  const heightListeners = React.useRef([])
  const currentHeight = React.useRef(0)

  React.useEffect(() => {
    if (appbarRef.current) {
      currentHeight.current = appbarRef.current.offsetHeight
      for (const listener of heightListeners.current) {
        listener(appbarRef.current.offsetHeight)
      }
    }
  }, [appbarRef, appbarRef?.current?.offsetHeight])

  const militaryPersistentStore = React.useRef({})
  const childScrollContext = React.useRef({})

  return authenticated ? (
    <div>
      <Tabs childWrapper={ScrollWrapper} childContext={childScrollContext} selTab={selTab} setSelTab={setSelTab} appbarRef={appbarRef}>
        {[(<div label="winners" key="defaultTab0" mykey="defaultTab0">
          <TeamView id={0}/>
        </div>),
        (<div label="settings" key="defaultTab2" myKey="defaultTab2">
          <SettingsPanel/>
        </div>), ...tabs.map(({type, params: v}, i) => (<div></div>))]}
      </Tabs>
    </div>
  ) : (<div/>);
}

const optionMap = [undefined, true, false]
const valueMap = {}
for (var i = 0; i < optionMap.length; i++) {
  valueMap[optionMap[i]] = i
}

const SettingsPanel = () => {
  const [state, setState] = React.useState({scoreRows: undefined, allowSubmissions: undefined})
  return (
    <div>
      <div style={{height: "12px"}}/>
      <div style={formItemStyle}>
        <Material.TextField fullWidth={true} select label={"Show scores on leaderboard"} variant="outlined" value={valueMap[state.scoreRows]} SelectProps={{native: true}}
          onChange={(event) => setState({...state, scoreRows: optionMap[event.target.value]})}
          InputLabelProps={{
            shrink: true,
          }}
          style={{maxWidth: "1000px"}}
          >
          <option value={0}></option>
          <option value={1}>Yes</option>
          <option value={2}>No</option>
        </Material.TextField>
      </div>
      <div style={formItemStyle}>
        <Material.TextField fullWidth={true} select label={"Allow submissions"} variant="outlined" value={valueMap[state.allowSubmissions]} SelectProps={{native: true}}
          onChange={(event) => setState({...state, allowSubmissions: optionMap[event.target.value]})}
          InputLabelProps={{
            shrink: true,
          }}
          style={{maxWidth: "1000px"}}
          >
          <option value={0}></option>
          <option value={1}>Yes</option>
          <option value={2}>No</option>
        </Material.TextField>
      </div>
      <Material.Button variant="outlined" onClick={() => {
        socket.emit("writeState", adminAuthToken, state)
      }}>apply</Material.Button>
      <div style={{height: "48px"}}/>
      <Material.Button style={{backgroundColor: "red"}} variant="outlined" onClick={() => {
        if (prompt("Are you sure you want to delete all teams? This cannot be undone. Type 'Erase' to confirm that you intend to do so.") === "Erase") {
          socket.emit("eraseSubmissions", adminAuthToken)
        }
      }}>delete all teams</Material.Button>
    </div>
  )
}

const detailPersistentStore = {}

const readDataStore = (internalUID) => {
  const result = dataStore.filter(x => x.internalUID === internalUID)
  if (result.length === 0) {
    return undefined
  }
  else {
    return result[0]
  }
}

const appendSubmission = async (write, authToken) => {
  socket.emit("writeNotifications", adminAuthToken, write)
}

const readRange = () => {
  return dataStore
}

const readForm = () => {
  return formStore
}

const teamValidator = data => {
  for (const field in data) {
    const val = data[field]
    if (!val || typeof val === "string" && val.length === 0) {
      return ["FAILED", "Please fill in all fields"]
    }
  }
  return ["SUCCESS"]
}

const FormFactory = ({blobs, prefill, fields, formPersistentStore, validator}) => {
  var fieldStates = []
  var myPersistentStore = formPersistentStore === undefined ? {} : formPersistentStore
  if (myPersistentStore.data === undefined) {
    myPersistentStore.data = fields.map(x => {
      if (typeof prefill === "object") {
        const prefilledField = prefill[x.name]
        if (prefilledField !== undefined) {
          return prefilledField
        }
      }
      return x.initialData
    })
  }
  const [states, setStates] = React.useState(myPersistentStore.data)
  var myStates = states
  for (var index = 0; index < fields.length; index++) {
    const i = index
    const field = fields[i]
    fieldStates.push([states[i], x => {
      myStates = [...myStates]
      myStates[i] = x
      myPersistentStore.data = myStates
      setStates(myStates)
    },field.initialData, field.name, field.friendlyName, field.fieldType, field.options, field.blobName])
  }
  const submit = async (authenticated) => {
    var constitutedObject = []
    for (const [text, setText, initialData, fieldName, friendlyName, fieldType] of fieldStates) {
      if (text !== "null") {
        constitutedObject.push({name: fieldName, category: friendlyName, winner: text})
      }
    }
    appendSubmission(constitutedObject)
  }
  return (
  <div>
  <div>
  {fieldStates.map(([text, setText, initialData, fieldName, friendlyName, fieldType, options, blobName], index) => {
    return (
      <div style={formItemStyle} key={index}>
      {fieldType === "datetime" ?
      (<Material.TextField
        id="datetime-local"
        fullWidth={true}
        label={friendlyName}
        type="datetime-local"
        variant="outlined"
        value={text}
        onChange={(event) => setText(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        style={{maxWidth: "1000px"}}
      />)
      :fieldType === "select" ? 
      (<Material.TextField 
      fullWidth={true}
      select
      label={friendlyName}
      variant="outlined"
      value={text}
      SelectProps={{
        native: true
      }}
      onChange={(event) => setText(event.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      style={{maxWidth: "1000px"}}
      >
      {options.map((val, index) => (<option key={index} value={val}>{val}</option>))}
      </Material.TextField>)
      :fieldType === "selectBlob" ? 
      (<React.Fragment>
        <Material.TextField 
        fullWidth={true}
        select
        label={friendlyName}
        variant="outlined"
        value={text}
        SelectProps={{
          native: true
        }}
        onChange={(event) => setText(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        style={{maxWidth: "1000px"}}
        >
        {(options => [<option key={-2} value={"null"}></option>, <option key={-1} value={"TBD"}>TBD</option>, ...options])(blobs[blobName].map((val, index) => (<option key={index} value={val.name}>{val.friendlyName}</option>)))}
        </Material.TextField>
        <div style={{flexBasis: "100%", height: "12px"}}/>{text === null ? <div style={{height: 125, width: 1}}/> : <img src={blobs[blobName].find(x => x.name === text)?.photo} height={125}/>}
      </React.Fragment>)
      :fieldType === "multi" ?
      (<Material.TextField
      fullWidth={true}
      multiline
      label={friendlyName}
      variant="outlined"
      value={text[0] ?? ""}
      onChange={(event) => setText([event.target.value])}
      InputLabelProps={{
        shrink: true
      }}
      style={{maxWidth: "1000px"}}/>)
      :(<Material.TextField fullWidth={true} multiline label={friendlyName} variant="outlined" value={text} onChange={(event) => setText(event.target.value)} InputLabelProps={{shrink: true,}} style={{maxWidth: "1000px"}}/>)
      }
      </div>
    )
  })}
  </div>
  <div style={{height:"12px"}}/>
  <Material.Button variant="outlined" onClick={submit}>choose winners</Material.Button>
  <div style={{height:"48px"}}/>
  </div>
  )
}

const normalizers = {
  "datetime": x => {
    try {
      if (x.length > 0) {
        return x.slice(8, 10) + "/" + x.slice(5, 7) + "/" + x.slice(0, 4) + " " + x.slice(11, 16)
      }
    }
    catch {
    }
    return x
  }
}

const formItemStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingLeft: "12px",
  paddingRight: "12px",
  paddingTop: "5px",
  paddingBottom: "7px"
}

const TeamView = ({id, cloneID}) => {
  const form = readForm()
  return (<div style={TransportViewStyle}><div style={{height: "12px"}}/>{<FormFactory blobs={form.blobs} prefill={undefined} fields={form.fields} defaults={dataDefaults} formPersistentStore={detailPersistentStore[id]} validator={teamValidator}/>}</div>)
}

const DEBOUNCE_PERIOD = 100

const initialUpState = (index) => {
  if (typeof index === "number" && index > 0) {
    return false
  }
  return true
}

const TransportViewStyle = {
  font: "20px Arial, sans-serif"
}

var dataStore = {columns: [], rows: []}

const readNotifications = () => {
  return notificationsStore
}

var notificationsStore = []

const formFields = [{name: "emailsNotify", initialData: [], friendlyName: "Email", fieldType: "multi", persistent: true, optional: true}, {name: "system", initialData: "Military", friendlyName: "Vehicle type", fieldType: "select", options: ["Military", "Civilian"]}, {name: "name", initialData: "", friendlyName: "Purpose"}, {name: "startDateTime", initialData: "", friendlyName: "Start time", fieldType: "datetime"}, {name: "endDateTime", initialData: "", friendlyName: "End time", fieldType: "datetime"}, {name: "origin", initialData: "", friendlyName: "Reporting location"}, {name: "destination", initialData: "", friendlyName: "Destination"}, {name: "POC", initialData: "", friendlyName: "Contact person"}, {name: "POCPhone", initialData: "", friendlyName: "Contact person number"}, {name: "vehicles", initialData: "", friendlyName: "Vehicles"}, {name: "notes", initialData: "", friendlyName: "Notes", optional: true}]

const dataDefaults = [{name: "addInfo", initialData: "", friendlyName: "Additional Info", optional: true}, {name: "status", initialData: "Pending", friendlyName: "Status"}]

const fieldToFriendly = {}

const fieldAttributes = {}

for (const description of [...formFields, ...dataDefaults]) {
  fieldToFriendly[description.name] = description.friendlyName
  fieldAttributes[description.name] = {persistent: description.persistent, optional: description.optional}
}

const Tabs = ({childWrapper, childContext, children, selTab, setSelTab, appbarRef}) => {
  const pre = [(<Material.Tab style={{opacity: 1, minWidth: 0, minHeight:0, padding: 0}} disableRipple selected label={<div style={{height: "48px", width: "48px"}}><img src={sir5logo} height="48px" width="48px"/></div>}/>), (<Material.Tab label={"fantasy skill at arms"} disableRipple/>)]
  const post = []
  const ChildWrapper = childWrapper
  return (
    <div>
      <Material.AppBar position="sticky" style={{top: "env(safe-area-inset-top)"}} ref={appbarRef}>
        <Material.Tabs variant="scrollable" value={Math.min(selTab, children.length-1)+pre.length}>
          {[...pre , ...children.map((child, index) => {
            const obj = {...child.props, removeCallback: () => child.props.removeCallback(index, children.length), onClick: () => {setSelTab(index)}, active: index === Math.min(selTab, children.length-1), key: child.props.mykey}
            return (<Tab {...obj}></Tab>)
          }), ...post]}
        </Material.Tabs>
      </Material.AppBar>
      <div>
        <ChildWrapper childContext={childContext} mykey={children[Math.min(selTab, children.length-1)].props.mykey}>
          {children[Math.min(selTab, children.length-1)]}
        </ChildWrapper>
      </div>
    </div>
  )
}

const Tab = ({label, onClick, active, removable, removeCallback}) => {
  return (
    <Material.Tab style={{padding: 0}} disableRipple selected label={(<span><Material.Tab label={label} onClick={onClick} selected={active ? true : null}/>
      {removable ? (<Material.IconButton size="small" onClick={removeCallback}><Icons.Close style={{fill: "red"}}/></Material.IconButton>) : undefined}
      </span>)}/>
  )
}

ReactDOM.render(
  <div style={{textAlign: "center"}}>
    <App/>
  </div>,
  document.getElementById('root')
);
