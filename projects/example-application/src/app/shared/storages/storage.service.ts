import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StorageService
{
  hasKey(key: string): boolean
  {
    if (key in localStorage)
    {
      return true;
    } else
    {
      return false;
    }
  }

  get<T>(key: string, defaultValue?: T)
  {
    if (this.hasKey(key))
    {
      try
      {
        const value: string = localStorage.getItem(key) || '';
        return JSON.parse(value) as T;
      }
      catch (e)
      {
        console.log(`${ e } ==> json parsing failed`);
        return null;
      }
    }
    else
    {
      if (defaultValue)
      {
        return defaultValue;
      }
      else
      {
        return null;
      }
    }
  }

  set<T>(key: string, value: T)
  {
    if (value)
    {
      localStorage.setItem(key, JSON.stringify(value));
    }
    else
    {
      this.remove(key);
    }
  }

  remove(key: string): void
  {
    if (this.hasKey(key))
    {
      localStorage.removeItem(key);
    }
  }

  clear(): void
  {
    localStorage.clear();
  }
}