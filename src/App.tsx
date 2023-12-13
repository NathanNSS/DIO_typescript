import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Card title="Javascript" paragraph="Conteúdo sobre javascript" />
      <Card title="typescript" paragraph="Conteúdo sobre typescript" />
      <Card title="Nodejs" paragraph="Conteúdo sobre nodejs" />
    </Layout>
  )
}
