import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TOOLS_URL } from '../../../app.tokens';
import { ToolsConfig } from './tools.object';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoToolsService {
  // Signal to hold the tools configuration
  public tools = signal<ToolsConfig | null>(null);

  private _toolsList: ToolsConfig | null = null;

  constructor(
    @Inject(TOOLS_URL) private readonly toolsUrl: string,
    private readonly http: HttpClient
  ) {
    this.getTools();
  }

  /**
   * Fetches the tools configuration from the specified URL.
   * @param toolsUrl
   */
  private async getTools() {
    const data = await firstValueFrom(this.http.get<ToolsConfig>(this.toolsUrl));
    this.tools.set(data);
    this._toolsList = data;
  }

  /**
   *
   * @param filterStr
   */
  public applyFilters(filterStr: string) {
    console.log('Applying filter:', filterStr);

    // lower case and trim the filter string
    const filterValue = filterStr?.trim().toLowerCase() || '';

    if (!filterValue) {
      // if filter empty, return all
      this.getTools();
      return;
    }

    // Filter through all fields of each tool object
    const filtered = this._toolsList?.tools?.filter((tool) => {
      // Collect all searchable text fields into a single array
      const searchableValues: string[] = [
        tool.name,
        tool.description,
        tool.reference,
        ...(tool.tags || []),
        ...(tool.versions || []),
        ...(tool.exampleProjects?.map((p) => `${p.name} ${p.url}`) || []),
      ].filter(Boolean); // remove undefined/null

      // Match if any field includes the search text
      return searchableValues.some((val) => val.toLowerCase().includes(filterValue));
    });

    this.tools.set({ tools: filtered || [] });
    console.log('Filtered tools:', filtered);
  }
}
