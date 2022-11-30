import { About, Careers, Contact, Home, NotFound, Projects, Public, Services } from "./containers/public";
import { Routes, Route } from "react-router-dom";
import { path } from "./utils/constant";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.ABOUT} element={<About />} />
          <Route path={path.PROJECT} element={<Projects />} />
          <Route path={path.SERVICES} element={<Services />} />
          <Route path={path.CAREERS} element={<Careers />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route path={path.NOTFOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
