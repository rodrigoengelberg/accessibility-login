# accessibility-login

Exemplo de tela de login com acessibilidade.

Neste exemplo, implementamos os seguintes recursos de acessibilidade:

- Labels: Cada campo de entrada possui um elemento <label> associado ao atributo for vinculando-o ao id da entrada. Essa associação ajuda os leitores de tela a anunciar a finalidade de cada campo.

- `aria-label:` adicionamos atributos aria-label aos elementos de entrada para fornecer uma descrição textual dos campos de entrada. Isto é especialmente útil para leitores de tela.

- `aria-required:` Não adicionamos explicitamente este atributo, pois require já o implica, mas você deve garantir que todos os campos obrigatórios tenham este atributo definido.

- Indicação de foco: não adicionamos explicitamente estilos de foco, mas é importante garantir que os elementos do seu formulário de login tenham estilos de foco claros e visíveis para navegação pelo teclado.

- Aprimoramento de JavaScript: JavaScript é usado para impedir o envio do formulário por padrão (para demonstrar que você pode implementar sua lógica de login) e para lidar com o envio do formulário. Isso garante uma experiência de usuário tranquila para aqueles que usam tecnologias assistivas.

Seguindo essas práticas, você pode criar uma tela de login acessível que proporciona uma melhor experiência de usuário para pessoas com deficiência. Lembre-se de testar seu site com leitores de tela e outras tecnologias assistivas para garantir total conformidade com a acessibilidade.
