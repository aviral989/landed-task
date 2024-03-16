import Pages from './components/Pages'
export default function App() {

    /**
 *
 * @returns {string}
 */
  // eslint-disable-next-line no-extend-native
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  };

  return (
   <Pages />
  );
}


