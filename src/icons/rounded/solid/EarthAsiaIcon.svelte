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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0ZM9.188 18H7.812A.813.813 0 0 1 7 17.188v-.229c0-.502.451-.884.946-.801l1.376.229A.812.812 0 0 1 9.189 18Zm4.42-3.547-.973.973A.812.812 0 0 1 11.4 14.38l.811-1.135a.812.812 0 0 1 1.235-.102l.162.162a.812.812 0 0 1 0 1.148Zm-.042-9.344-1.102.275a.873.873 0 0 0-.616.57l-.204.613a.87.87 0 0 0 .13.799l.7.933c.312.416.312.987 0 1.403l-.623.831a1.17 1.17 0 0 1-.935.468h-.679a.624.624 0 0 0-.616.727l.283 1.697a.791.791 0 0 1-.427.838l-.905.452a.79.79 0 0 1-.972-.214l-1.186-1.483a.684.684 0 0 0-.944-.12l-1.155.866a1.182 1.182 0 0 1-.71.237H2.201a9.983 9.983 0 0 1-.202-2C2 6.486 6.486 2 12 2c1.124 0 2.201.195 3.21.538-.409.845-.79 1.618-1.011 2.063a.964.964 0 0 1-.633.508Zm1.319 3.76a.813.813 0 0 1-.376-1.181l.741-1.182a.812.812 0 0 1 1.437.744l-.529 1.27a.812.812 0 0 1-1.062.437l-.212-.088Zm3.831 10.519-2.021-.289a1.338 1.338 0 0 1-1.008-.727l-.387-.774a1.343 1.343 0 0 1 0-1.198l.408-.815c.185-.37.53-.633.935-.714l1.605-.321a.85.85 0 0 0 .434-.232l.849-.849a.85.85 0 0 1 1.038-.128l1.213.728a9.99 9.99 0 0 1-3.066 5.319Z"/></svg>
  