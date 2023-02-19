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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-handshake-angle {customClass}"><path d="M23.73 8.41a.996.996 0 0 0-1.41-.04l-1.71 1.62h-7.6v-2c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V7.87a3.99 3.99 0 0 1 3-3.87l3.47-.9c.52-.13.99-.4 1.37-.78l.61-.61A.996.996 0 1 0 16.05.3l-.61.61c-.13.13-.29.22-.46.26l-3.47.9a5.985 5.985 0 0 0-4.44 4.99 6 6 0 0 0-4.99 4.44l-.9 3.47c-.04.17-.14.33-.26.46l-.61.61a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l.62-.61c.38-.38.65-.85.78-1.37l.9-3.47a3.989 3.989 0 0 1 3-2.9V13c0 1.65 1.35 3 3 3s3-1.35 3-3v-1h6.42l-1.44 5.1a4.023 4.023 0 0 1-3.83 2.92l-3.33.02c-.79 0-1.57.33-2.12.9l-1.34 1.37a1.001 1.001 0 0 0 .71 1.7c.25 0 .52-.1.71-.3l1.34-1.37a1 1 0 0 1 .71-.3l3.33-.02c2.66-.01 5.02-1.81 5.75-4.37 0 0 1.73-5.88 1.78-5.92l2-1.9c.4-.38.42-1.01.04-1.41Z"/></svg>
  