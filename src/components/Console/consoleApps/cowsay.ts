export const cowsay = (text: string) => {
  if (!text) {
    text = 'Hello!';
  }

  return `< ${text} >
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
};
