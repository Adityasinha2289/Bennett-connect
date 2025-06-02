export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          first_name: string | null
          last_name: string | null
          age: number | null
          gender: string | null
          interested_in: string | null
          course: string | null
          year_of_study: number | null
          bio: string | null
          interests: string[] | null
          photos: string[] | null
          prompts: Json | null
          location: string | null
          is_verified: boolean | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          first_name?: string | null
          last_name?: string | null
          age?: number | null
          gender?: string | null
          interested_in?: string | null
          course?: string | null
          year_of_study?: number | null
          bio?: string | null
          interests?: string[] | null
          photos?: string[] | null
          prompts?: Json | null
          location?: string | null
          is_verified?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          first_name?: string | null
          last_name?: string | null
          age?: number | null
          gender?: string | null
          interested_in?: string | null
          course?: string | null
          year_of_study?: number | null
          bio?: string | null
          interests?: string[] | null
          photos?: string[] | null
          prompts?: Json | null
          location?: string | null
          is_verified?: boolean | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
      matches: {
        Row: {
          id: string
          user1_id: string
          user2_id: string
          user1_liked: boolean
          user2_liked: boolean
          is_match: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user1_id: string
          user2_id: string
          user1_liked?: boolean
          user2_liked?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user1_id?: string
          user2_id?: string
          user1_liked?: boolean
          user2_liked?: boolean
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          match_id: string
          sender_id: string
          content: string
          created_at: string
        }
        Insert: {
          id?: string
          match_id: string
          sender_id: string
          content: string
          created_at?: string
        }
        Update: {
          id?: string
          match_id?: string
          sender_id?: string
          content?: string
          created_at?: string
        }
      }
      swipes: {
        Row: {
          id: string
          swiper_id: string
          swiped_id: string
          is_like: boolean
          created_at: string
        }
        Insert: {
          id?: string
          swiper_id: string
          swiped_id: string
          is_like: boolean
          created_at?: string
        }
        Update: {
          id?: string
          swiper_id?: string
          swiped_id?: string
          is_like?: boolean
          created_at?: string
        }
      }
    }
  }
}