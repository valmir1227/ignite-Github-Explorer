interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  //Se o repositorio estiver sem uma descrição, adiciona uma mensagem...
  if (!props.repository.description) {
    props.repository.description =
      "Desculpe, este repositório ainda está sem descrição 😧";
  }

  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar</a>
    </li>
  );
}
