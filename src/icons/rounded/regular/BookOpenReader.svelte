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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 9c5.934-.156 5.933-8.845 0-9-5.934.156-5.933 8.845 0 9Zm0-7c3.286.059 3.285 4.942 0 5-3.285-.059-3.285-4.942 0-5Zm10.204 9.162a4.993 4.993 0 0 0-4.099-1.081l-3.821.695A3.99 3.99 0 0 0 12 12.065a3.992 3.992 0 0 0-2.285-1.289l-3.821-.695a4.995 4.995 0 0 0-4.098 1.081A4.986 4.986 0 0 0 0 15.001v2.793a4.999 4.999 0 0 0 4.106 4.919l6.284 1.143a8.975 8.975 0 0 0 3.219 0l6.285-1.143a4.998 4.998 0 0 0 4.105-4.919v-2.793a4.983 4.983 0 0 0-1.796-3.838ZM11 21.929a7.339 7.339 0 0 1-.252-.041l-6.284-1.143A3 3 0 0 1 2 17.793V15c0-.892.393-1.731 1.078-2.303a2.994 2.994 0 0 1 2.459-.648l3.821.695c.952.173 1.642 1 1.642 1.968v7.217Zm11-4.135a3 3 0 0 1-2.463 2.952l-6.285 1.143a7.339 7.339 0 0 1-.252.041v-7.217c0-.967.69-1.795 1.642-1.968l3.821-.695A2.999 2.999 0 0 1 22 15.001v2.793Z"/></svg>
  