exports.main = async (context, sendResponse) => {
  const { body } = context;
  const endpoint =
    'https://api.hsforms.com/submissions/v3/integration/secure/submit/311600/9946019d-b048-47ac-96fd-1c0ebeeb3ba7';

  async function submitFormData() {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.hs_access_token}`,
      },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(endpoint, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.log('error', error);
    }
  }

  await submitFormData();

  sendResponse({ body: 'submitted', statusCode: 200 });
};
