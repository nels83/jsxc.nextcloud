
export default function injectChatIcon(toggleRoster: () => void) {
   let div = $('<div/>');

   div.addClass('ojsxc-chat-icon');
   div.click(function() {
      toggleRoster();
   });

   $('#header form.searchbox').after(div);
}
