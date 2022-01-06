import React from 'react';
import { Container, Navigation, DropboxLogo, Form } from './styles';


const MenuForm: React.FC = () => {
    function handleToggle() {
        if ( window.toggleActiveMenu) window.toggleActiveMenu();
    }

    return (
      <Container>
          <Navigation>
              <h1>
                  <DropboxLogo />
              </h1>

              <button className='action--close' onClick={handleToggle}>X</button>
          </Navigation>

          <Form>
              <span className="title"></span>
              <span className="subtitle"></span>

              <input type="text" placeholder='Nome' />
              <input type="text" placeholder='Sobrenome' />
              <input type="email" placeholder='E-mail' />
              <input type="password" placeholder='senha ' />

              <button>Prosseguir</button>

              <span className="terms">
                  Esta página está sujeita à Política de Privacidade e aos Termos de serviço.
              </span>
          </Form>

      </Container>
  );
}

export default MenuForm;