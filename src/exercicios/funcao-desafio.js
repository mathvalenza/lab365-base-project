export const funcaoDesafio = (texto, palavra) => {
  if (!texto) {
    return 0;
  }

  if (!palavra) {
    return null;
  }

  return texto
    .split(" ")
    .filter((p) => p.toUpperCase() === String(palavra).toUpperCase()).length;
};

// function returnNumberOfWordsFound(text, word) {
//   try {
//     const words = text.toLowerCase().split(' ')
//     const count = words.reduce((acc, w) => {
//       if (w === word.toLowerCase()) {
//         return acc + 1
//       }
//       return acc
//     }, 0)
//     return count
//   } catch {
//     return null
//   }
//  }
