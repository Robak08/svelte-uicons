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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.786 19.492 16.713 1.836A3.005 3.005 0 0 0 12.802.191l-.925.378a3.024 3.024 0 0 0-.68.402 2.98 2.98 0 0 0-2.196-.972H3A3.005 3.005 0 0 0 0 3v18c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V8.895l5.304 13.242c.625 1.543 2.417 2.26 3.909 1.641l.926-.378c1.505-.574 2.286-2.434 1.647-3.907ZM13.574 7.446l2.778-1.132 4.171 10.412-2.778 1.132-4.171-10.412Zm-.942-5.025.925-.378a1.002 1.002 0 0 1 1.302.543l.75 1.871-2.777 1.132-.747-1.866a1 1 0 0 1 .549-1.303ZM2 7h3v10H2V7Zm5 0h3v10H7V7Zm3-4v2H7V2h2c.551 0 1 .448 1 1ZM3 2h2v3H2V3c0-.552.449-1 1-1ZM2 21v-2h3v3H3c-.551 0-1-.448-1-1Zm7 1H7v-3h3v2c0 .552-.449 1-1 1Zm12.929-.991a.995.995 0 0 1-.544.539l-.926.378a1 1 0 0 1-1.3-.54l-.669-1.671 2.778-1.132.665 1.661a.988.988 0 0 1-.003.766Z"/></svg>
  