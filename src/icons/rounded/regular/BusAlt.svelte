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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 10V6.42a6.168 6.168 0 0 0-.04-.7A5.933 5.933 0 0 0 17.4.584a25.374 25.374 0 0 0-10.8 0A5.934 5.934 0 0 0 2.04 5.72a6.168 6.168 0 0 0-.04.7V10a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2v2a4.994 4.994 0 0 0 2 4v.5a2.5 2.5 0 0 0 4.95.5h6.1a2.5 2.5 0 0 0 4.95-.5V21a4.994 4.994 0 0 0 2-4v-2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2ZM4 13V7h16v6ZM7.052 2.532a23.287 23.287 0 0 1 9.9 0A3.927 3.927 0 0 1 19.746 5H16a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1H4.254a3.927 3.927 0 0 1 2.798-2.468ZM17 20H7a3 3 0 0 1-3-3v-2h2v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h2v2a3 3 0 0 1-3 3Z"/></svg>
  