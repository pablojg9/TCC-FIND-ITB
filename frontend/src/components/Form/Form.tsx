import 'assets/css/form.css';

import { BsAward } from 'react-icons/bs';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { BsEnvelope } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Form = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   if (email === "pablo@gmail.com") {
      

   }

   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <div className="col">
                  <h2 className="frase">Find, encontre o profissional ideal para seu projeto</h2>

                  <div className="block-table">
                     <BsAward size={35} color="1b98e0" />
                     <span className="text-dev">Desenvolvedores qualicados</span>
                  </div>

                  <div className="block-table">
                     <IoCodeSlashOutline size={35} color="1b98e0" />
                     <span className="text-dev">Amplas lista de linguagem</span>
                  </div>

                  <div className="block-table">
                     <BsEnvelope size={35} color="1b98e0" />
                     <span className="text-dev">Conversa via chat com o profissional</span>
                     <br />
                     <button id="btn">Envie seu curriculo</button>

                  </div>
               </div>
               <div className="col">
                  <form>
                     <div className="color-form text-center">
                        <div className="email">
                           <input className="space form-edit" type="email" placeholder="E-mail" required></input>
                        </div>
                        <div className="senha">
                           <input type="password" className="form-edit" placeholder="password" required></input>
                        </div>

                        <Link to="/home">
                           <button type="button" id="btnlogin" className="button-edit" >
                              Logar
                           </button>
                        </Link>

                        <p><a className="naoconta space" href="##">não tenho uma conta</a></p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
}

export default Form;