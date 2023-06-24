import { Navbar } from "@/components"
import { Route } from "wouter";
import { useLocation } from "wouter";
import { MdOutlineWineBar, MdOutlineMap, MdOutlineSettings, MdOutlineTask } from 'react-icons/md';
import { Dashboard, Kanban, Map, Settings } from "@/screens";

function App() {
  const avatarURL = 'https://s3-alpha-sig.figma.com/img/281b/0b49/964720a17109c22857c8b5e3a5637600?Expires=1687737600&Signature=GWINJwmrW6z9a3vLFwh16VNivwgeqYrnI2hb42~DKFntF7sQ973gNQcbwiPmTCmDik8bV7wLwP-NunOtRYLilX6t5vSRtsdGnkuo8fRTtSWjyaIPD7KQ99V0PIOFSS5Y~e9sHPGDVj2mXIGkWO1OcwjiZcx64tyiPA1odNDg1Wb0SdPanjSNGVZXq96RUWh-QdKxoSIli~KgwUGgIZrnYIjopPmezGOwGQyll~hY93ajq8TkYuFpqUnqLvVN3KE6J1AIXgzFEFQYkdT5HlO5y2zMnKMS3U91M~uZbM6ZxMEGVg0cUMX9cVSsVyO-8mJCE8HfMMap1CPXomq7kXTd7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  const [location] = useLocation()
  const getIconStyles = (selected: boolean) => ({
    color: selected ? '#2D2D2D' : '#FBF8ED',
    background: selected ? '#FBF8ED' : 'transparent',
    padding: '6px',
    borderRadius: '13px',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
  })

  return (
    <>
      <Navbar
        title="My App"
        links={[
          { 
            label: "Главная", 
            url: "/", 
            icon: (<MdOutlineWineBar 
              size={20}
              style={getIconStyles(location === "/")}
            />),
            style: getIconStyles((location === "/"))
          },
          { 
            label: "Канбан", 
            url: "/kanban", 
            icon: <MdOutlineTask 
              size={20}
              style={getIconStyles(location === "/kanban")}
            />,
            style: getIconStyles((location === "/kanban"))
          },
          { 
            label: "Настройки", 
            url: "/settings", 
            icon: <MdOutlineSettings 
              size={20}
              style={getIconStyles(location === "/settings")}
            />,
            style: getIconStyles((location === "/settings"))
          },
          { 
            label: "Карта", 
            url: "/map", 
            icon: <MdOutlineMap 
              size={20}
              style={getIconStyles(location === "/map")}
            />,
            style: getIconStyles((location === "/map"))
          },
        ]}
        avatar={avatarURL}
      >
        <Route path="/">
          <Dashboard/>
        </Route>
        <Route path="/map">
          <Map/>
        </Route>
        <Route path="/kanban">
          <Kanban/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
      </Navbar>
    </>
  )
}

export default App
