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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.547 5.666-4.192-4.192a4.994 4.994 0 0 0-7.065 0l-9.817 9.817a5.019 5.019 0 0 0 0 7.064l4.192 4.192a5.019 5.019 0 0 0 7.065 0l9.817-9.817a5.018 5.018 0 0 0 0-7.064ZM18.638 12.4l-2.861-2.86-2.4 2.4 2.865 2.86a1 1 0 0 1-1.413 1.413l-2.861-2.861L9.63 15.69l2.86 2.861a1 1 0 1 1-1.412 1.413L8.217 17.1 6.321 19a1 1 0 0 1-1.413-1.413l1.9-1.9-2.746-2.739a1 1 0 1 1 1.413-1.413l2.742 2.742 2.338-2.338L7.813 9.2a1 1 0 0 1 1.413-1.416l2.742 2.742 2.4-2.4-2.746-2.738a1 1 0 0 1 1.413-1.413l2.742 2.742 1.771-1.77A1 1 0 0 1 18.96 6.36l-1.77 1.77 2.861 2.861a1 1 0 0 1-1.413 1.409Z"/></svg>
  