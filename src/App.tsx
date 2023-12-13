import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <fieldset style={{ width: 'fit-content' }}>
        <legend>Faça o Login</legend>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" /><br/><br/>
        
        <label htmlFor="senha">Senha:</label>
        <input type="password" name="senha" id="senha" /><br/><br/>

        <button type="submit">Entrar</button>
      </fieldset>
    </Layout>
  )
}
