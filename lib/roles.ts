import * as bcrypt from 'bcrypt';

export const getRoleBadgeColor = (role: string) => {
  let badgeColor = '';
  switch (true) {
  case role === 'admin':
    badgeColor = 'accent';
    break;
  case role === 'user':
    badgeColor = 'primary';
    break;
  case role === 'participant':
    badgeColor = 'info';
    break;
  default:
    badgeColor = 'default';
  }
  return badgeColor;
};

export const getReadableFileSize = (sizeInBytes: number) => {
  const fileSizeInKB = Math.round(sizeInBytes / 1024);
  const fileSizeInMB = Math.round(fileSizeInKB / 1024);
  const displaySize = fileSizeInMB <= 0
    ? `${fileSizeInKB} KB`
    : fileSizeInKB <= 0
      ? `${sizeInBytes} Bytes`
      : `${fileSizeInMB} MB`;
  return {
    fileSizeInKB,
    fileSizeInMB,
    fileSizeInBytes: sizeInBytes,
    displaySize,
  };
};
