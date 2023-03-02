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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.212 7a6.055 6.055 0 0 1 3.079 3.327l-3.639 3.639-3.2-3.2Zm-2.159-.669h-.008v.011Zm-6.277 9.108 3.2 3.2 3.259-3.259-3.2-3.2Zm1.845-4.673L6.835 6.98A6.064 6.064 0 0 0 3.7 10.361l3.664 3.664Zm-1 13.064a17.034 17.034 0 0 0 4.725.005l-2.367-2.365Zm-6.48-11.2a18.7 18.7 0 0 0 .124 5.495L5.95 15.44Zm4.223 4.224-3.393 3.391a6.109 6.109 0 0 0 3.391 3.013l3.2-3.2Zm6.031 3.2 3.213 3.213a6.112 6.112 0 0 0 3.444-3.067l-3.4-3.4Zm7.464-7.465-2.791 2.792 2.681 2.681a18.792 18.792 0 0 0 .108-5.471ZM17.9 1.553a1 1 0 0 0-1.342-.448A6.461 6.461 0 0 0 13 6V1a1 1 0 0 0-2 0v5a6.461 6.461 0 0 0-3.553-4.895A1 1 0 1 0 6.553 2.9a4.468 4.468 0 0 1 2.4 3.438h-.006L12 9.387l3.043-3.043a4.474 4.474 0 0 1 2.4-3.449 1 1 0 0 0 .457-1.342Z"/></svg>
  