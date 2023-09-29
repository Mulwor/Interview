// ! Links: https://leetcode.com/problems/defanging-an-ip-address/

// * Given a valid (IPv4) IP address, return a defanged version of that IP address.
// * A defanged IP address replaces every period "." with "[.]".

// * Input: address = "1.1.1.1"
// * Output: "1[.]1[.]1[.]1"

var defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]")
}


var defangIPaddr = function(address) {
  return address.split('.').join('[.]');
};