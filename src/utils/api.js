export default {
  getSignUpApi () {
    let hostname = window.location.hostname
    if (hostname.indexOf('local') > -1 || hostname.indexOf('devlp') > -1) {
      return 'http://stagemember.vipjr.com/aspx/MemberCenterLiteVipJr'
    } else {
      return 'http://stagemember.vipjr.com/aspx/MemberCenterLiteVipJr'
    }
  }
}
