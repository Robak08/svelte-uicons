<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12a9.998 9.998 0 0 1 4.477-8.332l1.247 1.091A.808.808 0 0 1 8 5.367v.826c0 .446.362.808.808.808h.726c.305 0 .605-.083.867-.24l1.546-.928a.827.827 0 0 1 1.01.124l.801.801a.826.826 0 0 1 .242.585v.831c0 .457-.37.827-.827.827H10.54c-.352 0-.697.104-.99.3l-1.756 1.17a1.783 1.783 0 0 0-.795 1.485v1.045a2 2 0 0 0 2 2h1.427c.337 0 .63.229.712.556l.693 2.774a.887.887 0 0 0 .859.671h.807a.884.884 0 0 0 .759-.43l2.495-4.159c.161-.269.247-.577.247-.891v-1.303c0-.459-.182-.9-.507-1.224l-.993-.993h2.257c.796 0 1.559-.316 2.121-.879l1.235-1.235a9.938 9.938 0 0 1 .886 4.114c0 5.514-4.486 10-10 10Z"/></svg>
  