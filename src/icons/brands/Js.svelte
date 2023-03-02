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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.122 18.75a2.456 2.456 0 0 0 2.225 1.37c.934 0 1.531-.467 1.531-1.113 0-.773-.613-1.047-1.642-1.5l-.564-.242c-1.627-.693-2.708-1.562-2.708-3.4a3.014 3.014 0 0 1 3.3-2.979 3.332 3.332 0 0 1 3.21 1.814l-1.756 1.127a1.534 1.534 0 0 0-1.451-.966.982.982 0 0 0-1.08.966c0 .677.419.951 1.387 1.37l.564.241c1.916.822 3 1.66 3 3.543 0 2.031-1.595 3.143-3.737 3.143a4.333 4.333 0 0 1-4.11-2.306Zm-7.967.2c.354.628.677 1.16 1.451 1.16.741 0 1.209-.29 1.209-1.418V11.02h2.255v7.7a3.063 3.063 0 0 1-3.368 3.4 3.5 3.5 0 0 1-3.383-2.06Z"/></svg>
  