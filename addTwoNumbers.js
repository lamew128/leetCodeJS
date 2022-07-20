/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(0);
  let current = head;
  let c = false;
  
  while( l1 !== null || l2 !== null || c ) {
      
      const sum = c ? (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + 1 : (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
      current.val = sum % 10;
      c = sum >= 10 ? true : false;
      
      if(l1) {
          l1 = l1.next;
      }
      
      if(l2) {
          l2 = l2.next;
      }
      current.next = (c || l1 || l2) ? new ListNode(0) : null;
      current = current.next;
  }
  
  return head;
};