const submitIcon = document.querySelector('#submit-icon');
const inputElement = document.querySelector('input');

const getImages = async () => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: inputElement.value,
      n: 4,
      size: '1024x1024',
    }),
  };
  try {
    const response = await fetch(
      ' ',
      options
    );
    const data = await response.json();
    alert(data);
  } catch (error) {
    console.error(error);
  }
};

submitIcon.addEventListener('click', getImages);
