// import crypto from 'crypto-browserify';

// // генерируем какой-то идентификатор для запуска
// export const UUID = crypto.randomUUID();

import { v4 as uuidv4 } from 'uuid';

export const UUID = uuidv4();