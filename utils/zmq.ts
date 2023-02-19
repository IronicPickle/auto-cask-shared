import { ZmqRequest } from "../ts/zmq/generic";

export const getZmqRoutingId = (frames: Buffer[]) => {
  let routingId: string | null = null;

  try {
    routingId = frames[0].toString();
  } catch (err) {
    console.error(err);
  }

  return routingId;
};

export const zmqDeserialise = (frame: Buffer) => {
  let data: ZmqRequest | null = null;

  try {
    data = JSON.parse(frame.toString());
  } catch (err) {
    console.error(err);
  }

  return data;
};

export const zmqSerialise = (type: string, data?: Record<any, any>) =>
  JSON.stringify({
    type,
    data,
  });
