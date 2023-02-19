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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-audio-description-slash {customClass}"><path d="M24 16V8c0-2.76-2.24-5-5-5H4.2L1.74.32C1.36-.08.73-.11.32.26c-.4.38-.43 1.01-.06 1.42l5.88 6.39c-.1.18-.18.37-.23.59l-1.62 7.12c-.12.54.21 1.07.75 1.2.53.12 1.07-.22 1.2-.75l.28-1.22h2.96l.28 1.22c.11.46.52.78.97.78.07 0 .15 0 .22-.02.54-.12.88-.66.75-1.2l-1.62-7.12c-.23-1-1.06-1.66-2.08-1.66h-.12l-1.84-2H19c1.65 0 3 1.35 3 3V16c0 1.22-.73 2.29-1.83 2.76l-2.26-2.26c1.24-.68 2.09-1.98 2.09-3.49v-2c0-2.21-1.79-4-4-4h-1c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h.59l6.71 6.71c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41l-2.06-2.06c1.43-.9 2.35-2.47 2.35-4.23ZM6.98 13l.89-3.9s.02-.11.13-.11.12.06.14.11l.89 3.9H6.98ZM15 9h1c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1V9Zm1 11c0 .55-.45 1-1 1H5c-2.76 0-5-2.24-5-5V8c0-.42.05-.84.16-1.25a1 1 0 0 1 1.22-.72c.54.14.86.68.72 1.22-.06.24-.09.5-.09.75v8c0 1.65 1.35 3 3 3H15c.55 0 1 .45 1 1Z"/></svg>
  