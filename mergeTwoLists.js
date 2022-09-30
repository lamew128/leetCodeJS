/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  if (!list1) {
      return list2;
  }
  if (!list2) {
      return list1;
  }
  let temp = new ListNode(null, null);
  if (list1.val < list2.val) {
      temp.val = list1.val;
      list1 = list1.next;
  } else {
      temp.val = list2.val;
      list2 = list2.next;
  }
  
  let result = temp;
  while (list1 && list2) {
      if (list1.val < list2.val) {
          result.next = list1;
          list1 = list1.next;
      } else {
          result.next = list2;
          list2 = list2.next;
      }
      result = result.next;
  }
  result.next = !list1 ? list2 : list1;
  return temp;
};