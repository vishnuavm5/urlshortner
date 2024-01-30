import crypto from "crypto";

export default function generateCode(length: number): string {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, length);
}
