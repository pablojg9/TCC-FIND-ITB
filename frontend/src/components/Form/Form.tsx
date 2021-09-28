import 'assets/css/form.css';

const Form = () => {
   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <div className="col">
                  <h2 className="frase">Find, encontre o profissional ideal para seu projeto</h2>
               </div>
               <div className="col">
                  <form>
                     <div className="color-form text-center">
                        <div className="email">
                           <input className="space form-edit" type="email" placeholder="email" required></input>
                        </div>
                        <div className="senha">
                           <input type="password" className="form-edit" placeholder="password" required></input>
                        </div>

                        <button type="button" id="btnlogin" className="button-edit">
                           Logar
                        </button>
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