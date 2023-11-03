import RingCentral from '@rc-ex/core';
import DebugExtension from '@rc-ex/debug';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
});

const main = async () => {
  const debugExtension = new DebugExtension();
  await rc.installExtension(debugExtension);
  await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
  await rc.authorize({ jwt: process.env.RINGCENTRAL_JWT_TOKEN! });
};
main();
