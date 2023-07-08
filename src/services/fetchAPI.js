
export async function makeAPIRequest(url) {
  const requestOptions = {
    headers: {
      'X-Correlation-ID': correlationId,
    },
  };
  const data = await fetch(url, requestOptions);
  const json = await data.json();
  console.log(json);
  return json;
};