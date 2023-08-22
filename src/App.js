import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function App() {
  return (
    <SwaggerUI url="https://gist.githubusercontent.com/char0n/a5097ec2f0105a7bf100b4bafcfcda9c/raw/cc81abb3ddf0c5bc278f06166984c867e2142d1c/openapi-3-1-callbacks.yaml" />
  );
}

export default App;
