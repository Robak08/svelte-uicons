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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 6h-1V4c0-2.206-1.794-4-4-4H7C4.794 0 3 1.794 3 4v5c0 .739.201 1.431.552 2.025A4.005 4.005 0 0 0 0 15v5c0 2.206 1.794 4 4 4h8c2.206 0 4-1.794 4-4v-1h4c2.206 0 4-1.794 4-4v-5c0-2.206-1.794-4-4-4ZM5 4c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v2h-5c-2.206 0-4 1.794-4 4v1H7c-1.103 0-2-.897-2-2V4Zm7 9c.179 0 .353.024.518.068L8.995 16.59c-.527.527-1.446.527-1.975 0l-3.526-3.526c.161-.042.331-.065.505-.065H12Zm2 7c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-5c0-.184.025-.361.072-.53l3.535 3.535c.642.642 1.495.995 2.402.995s1.761-.354 2.402-.995l3.522-3.522c.044.165.068.338.068.517v5Zm8-5c0 1.103-.897 2-2 2h-4v-2c0-2.206-1.794-4-4-4h-2v-1c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v5Zm-2-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
  