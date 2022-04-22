import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function Table() {
  const { data } = useContext(ContextPlanets);
  return (

    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={ item.name }>
            <td>
              {item.name}
            </td>
            <td>
              {item.rotation_period}
            </td>
            <td>
              {item.orbital_period}
            </td>
            <td>
              {item.diameter}
            </td>
            <td>
              {item.climate}
            </td>
            <td>
              {item.gravity}
            </td>
            <td>
              {item.terrain}
            </td>
            <td>
              {item.surface_water}
            </td>
            <td>
              {item.population}
            </td>
            <td>
              {item.films}
            </td>
            <td>
              {item.created}
            </td>
            <td>
              {item.edited}
            </td>
            <td>
              {item.url}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
