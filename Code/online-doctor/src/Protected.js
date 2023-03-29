import React, { useEffect } from 'react';
import Navber from './components/Navber';

export default function Protected(props) {

      // // const {navberComponent, backgroundComponent} = props;
      // const navigate = useNavigate();
      // useEffect(()=> {
      //       let login = localStorage.getItem('login');
      //       if(!login) {
      //             // navigate('/login');
      //             <Navigate to={"/"} />;
      //       }
      // })

      // let login = localStorage.getItem('login');
      //       if(!login) {
      //             // navigate('/login');
      //             <Navigate to={"/"} />;
      //       }

      return (
      <div>
            <Navber slideberContents = {<props.backgroundComponent/>} backgroundContents={props.navberComponent}/>
      </div>
      )
}
