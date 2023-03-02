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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.631 4.44A3.017 3.017 0 0 0 21 0c-1.016-.043-1.956.867-2.932.477C13.51-.423 8.631-.4 3.874 3.874-.407 8.639-.417 13.5.477 18.069.869 19.051-.043 19.977 0 21a3.018 3.018 0 0 0 4.44 2.632 2.122 2.122 0 0 1 1.458-.1c4.564.882 9.464.879 14.228-3.407 4.306-4.809 4.276-9.62 3.407-14.227a2.129 2.129 0 0 1 .098-1.458ZM15 11a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm2 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm2-3a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  