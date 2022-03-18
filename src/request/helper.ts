import { Message } from '@arco-design/web-react';
import { ERROR_CODE } from './errorCode';

export function handleErrorCode(code: number, err: any) {
  if (code === ERROR_CODE.NO_AUTH) {
    Message.warning('没有权限');
  }
}