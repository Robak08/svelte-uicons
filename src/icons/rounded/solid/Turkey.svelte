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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.41 8.808c1.537-1.566 5.79-3.515 7.929-2.561l1.44-1.44a1.5 1.5 0 1 1 2.063-.649 1.5 1.5 0 1 1-.649 2.063l-1.444 1.444c.981 2.39-1.1 6.474-2.555 7.927C12.6 19.949 6.055 13.4 10.41 8.808Zm8.2 8.2c-6.831 6.361-16.1-3.669-9.21-9.981A8.942 8.942 0 0 0 0 16v2.568c.168 5.311 5.723 5.24 9 5.432 9 .149 20.246-2.311 12.416-11.777a13.057 13.057 0 0 1-2.809 4.783ZM8 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm4 0a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1ZM4 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Z"/></svg>
  