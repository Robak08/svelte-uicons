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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m9.665 19.15-.6 3.975a1 1 0 0 1-.988.85.97.97 0 0 1-.151-.012 1 1 0 0 1-.838-1.138l.6-3.975a1 1 0 1 1 1.977.3ZM21.048 8v15a1 1 0 0 1-2 0V12h-3a1 1 0 0 1-.895-.553l-.637-1.275-.459 2.52a1 1 0 0 1-.983.821 1.114 1.114 0 0 1-.18-.016 1 1 0 0 1-.8-1.164l.788-4.324c-.023 0-.044-.009-.066-.009h-1.93L9.9 13.36a1 1 0 0 0 .436 1.042l4.252 2.759a1 1 0 0 1 .455.839v5a1 1 0 0 1-2 0v-4.457l-3.8-2.463a3 3 0 0 1-.743-.694A3.3 3.3 0 0 1 6.537 16c-1.671 0-3.47-1.252-3.47-4 0-3.364 3.037-6 6.914-6h2.831A2.984 2.984 0 0 1 15.5 7.658L16.666 10h2.382V8a1 1 0 0 1 2 0ZM7.977 12.793l.851-4.676C6.832 8.508 5.067 9.9 5.067 12c0 1.9 1.225 2 1.47 2a1.491 1.491 0 0 0 1.44-1.207ZM13.048 5a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Z"/></svg>
  