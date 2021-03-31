import request from 'utils/request';

// eslint-disable-next-line import/prefer-default-export
export const fetchLists = () =>
  request({
    channel: '/api/getRoleById'
  });
