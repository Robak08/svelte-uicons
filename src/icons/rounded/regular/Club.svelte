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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 14a6 6 0 0 0-5.606-5.98A5.456 5.456 0 0 0 18 5.546 5.793 5.793 0 0 0 12 0a5.793 5.793 0 0 0-6 5.546 5.45 5.45 0 0 0 .607 2.474A6 6 0 0 0 7 20a5.6 5.6 0 0 0 3.938-1.807C10.773 20.755 10.156 22 8 22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-2c-2.156 0-2.773-1.245-2.938-3.807A5.6 5.6 0 0 0 17 20a6.006 6.006 0 0 0 6-6ZM12 2a3.8 3.8 0 0 1 4 3.546c0 2.133-2.1 3.534-2.189 3.593a.843.843 0 0 0-.08.078A8.972 8.972 0 0 0 12 11.053a8.955 8.955 0 0 0-1.732-1.837c-.025-.019-.039-.047-.066-.065l-.145-.1-.031-.025A4.716 4.716 0 0 1 8 5.546 3.8 3.8 0 0 1 12 2Zm-.029 20 .029-.047.029.047Zm.939-7.414A1 1 0 0 0 12 14a1 1 0 0 0-.91.583C11.075 14.618 9.491 18 7 18a4 4 0 0 1 0-8 3.226 3.226 0 0 1 1.876.662c.075.055.13.094.174.124a8.182 8.182 0 0 1 2.04 2.628A1 1 0 0 0 12 14a1 1 0 0 0 .91-.583C12.925 13.382 14.509 10 17 10a4 4 0 0 1 0 8c-2.491 0-4.075-3.382-4.09-3.414Z"/></svg>
  