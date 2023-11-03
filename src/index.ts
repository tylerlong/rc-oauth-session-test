import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';
import waitFor from 'wait-for-async';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  const debugExtension = new DebugExtension();
  await rc.installExtension(debugExtension);
  await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
  await waitFor({ interval: 3000 });
  await rc.refresh();
  await waitFor({ interval: 3000 });
  await rc.refresh();
};
main();
