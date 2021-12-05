// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {
//   Home,
//   Welcome,
//   CreatePendanaan,
//   TotalDetail,
//   ViewAllPendanaan,
//   DanaDetail,
//   EditPendanaan,
//   ProductByCategory,
//   Report
// } from "pages";

// export default function Navigation() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Welcome} />
//           <Route path="/home" component={Home} />
//           <Route path="/create" component={CreatePendanaan} />
//           <Route path="/detail" component={TotalDetail} />
//           <Route path="/all" component={ViewAllPendanaan} />
//           <Route path="/report" component={Report} />
//           <Route exact path="/pendanaan/:id" component={DanaDetail} />
//           <Route path="/pendanaan/:id/edit" component={EditPendanaan} />
//           <Route
//             exact
//             path="/category/:category"
//             component={ProductByCategory}
//           />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
