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